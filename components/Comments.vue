<template>
    <div>
        <div class="search-box">
            <div class="dropdown-box">
                <a href="#" class="dropdown-button" :class="{ 'dropdown-button--clicked': showDropdown}" @click.prevent="showDropdown = !showDropdown">
                    <span class="dropdown-button__search-icon"></span>
                    <span class="dropdown-button__text">{{ searchType }} </span>
                    <span class="dropdown-button__arrow"></span>
                </a>
                <div class="dropdown-content" v-if="showDropdown">
                    <a href="#" @click.prevent="changeSearchType('mapper')" v-if="searchType != 'mapper'">{{ $t(`ayim.modes.comments.mapper`) }}</a>
                    <a href="#" @click.prevent="changeSearchType('commenter')" v-if="searchType != 'commenter'">{{ $t(`ayim.modes.comments.commenter`) }}</a>
                </div>
            </div>
            <input class="search-input" type="text" placeholder="type here to search" v-model="searchValue" @input="search()">
        </div>

        <transition-group appear name="list" tag="div">
        <div v-for="comment in commentsInScreen" :key="comment.userId" class="comments-row">
            <div class="user-card" :style="`background-image: url('https://a.ppy.sh/${comment.userId}')`">
                <a :href="`https://osu.ppy.sh/users/${comment.userId}`" target="__blank" class="user-card__username">{{comment.username}}</a>
                <div class="user-card__commenter">
                    <div class="user-card__commenter__pre-text">{{ $t(`ayim.modes.comments.commenter`) }}</div>
                    <a :href="`https://osu.ppy.sh/users/${comment.commenter}`" target="__blank">{{comment.commenter}}</a>
                </div>
            </div>
            <div class="comment-box">
                <div class="comment-box__pre-text">"</div>
                <div>{{comment.comment}}</div>
            </div>
        </div>
        </transition-group>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'comments-grid',
    props: {
        mode: String,
    },
    data () {
        return {
            comments: [],
            limit: 10,
            searchType: 'mapper',
            searchValue: null,
            showDropdown: false,
            filteredComments: null,
        }
    },
    computed: {
        commentsInScreen () {
            if (this.filteredComments) return this.filteredComments.slice(0, this.limit);
            else if (this.comments) return this.comments.slice(0, this.limit);
        }
    },
    methods: {
        search: function() {
            this.filteredComments = this.comments.filter(c => {
                if (this.searchType == 'mapper') {
                    return c.username.toString().toUpperCase().includes(this.searchValue.toUpperCase());
                } else {
                    return c.commenter.toString().toUpperCase().includes(this.searchValue.toUpperCase());
                }
            });
        },
        changeSearchType: function(type) {
            this.searchType = type;
            this.showDropdown = !this.showDropdown;
            if (this.searchValue) this.search();
        },
        scroll: function() {
            window.onscroll = () => {
                if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight) {
                    this.limit += 20;
                }
            };
        },
    },
    async mounted () {
        this.scroll();
        
        try {
            this.comments = (await axios.get(`/${this.mode}/comments.json`)).data;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style>
a {
    text-decoration: none;
    color: #fff;
}
.search-box {
    display: flex;
    width: 48%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}

.dropdown-box {
    position: relative;
    flex: 0 0 30%;
}
.dropdown-button {
    display: flex;
    justify-content: space-between;
    background-color: var(--pink);
    padding: calc(0.4vh) 20px;
    border: solid var(--pink) 0.5px;
    border-radius: 15px 0 0 15px;
    color: #fff;
    font-size: calc(1vw + 0.1em);
    transition: all 0.5s ease-out;
    position: relative;
}
.dropdown-button:hover {
    background-color: #fb3b83;
}
.dropdown-button--clicked {
    background-color: transparent;
    background-image: linear-gradient(0deg, rgba(255,187,187,1) 0%, rgba(255,233,233,1) 22%, rgba(255,255,255,1) 98%);
    color: #fb3b83;
    border-color: #fff;
}
.dropdown-button__search-icon {
    background: url('/search-icon.svg') no-repeat;
    filter: invert(1);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5vw;
}
.dropdown-button__text {
    margin-left: auto;
}
.dropdown-button__arrow {
    display: inline-block;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #fff;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
}
.dropdown-button--clicked .dropdown-button__arrow {
    border-top-color: var(--pink);
}
.dropdown-button--clicked .dropdown-button__search-icon {
    filter: invert(30%) sepia(50%) saturate(3000%) hue-rotate(335deg) brightness(184%) contrast(80%);
}

.dropdown-content {
    position: absolute;
    z-index: 1;
    background-color: #2a2a2a;
    color: #fff;
    padding: 0.8vh calc(1vw + 5px);
    border-radius: 0 0 10px 10px;
    width: 50%;
    left: 20%;
    text-align: center;
}
.dropdown-content:hover {
    background-image: linear-gradient(0deg, rgba(42,42,42,1) 57%, rgba(52,52,52,1) 69%, rgba(89,89,89,1) 89%, rgba(102,102,102,1) 96%, rgba(134,134,134,1) 100%);
}
.dropdown-content a {
    display: block;
    font-size: calc(1vw);
    text-transform: lowercase;
}

.search-input {
    width: 100%;
    top: 0;
    margin: 0;
    padding: calc(0.2vh) 20px;
    border-radius: 0 15px 15px 0;
    border: solid 0.5px var(--pink);
    background-color: #171719;
    font-size: calc(1vw);
    outline: none;
    color: #fff;
}

.comments-row {
    display: flex;
    margin-bottom: 12px;
}

.user-card {
    padding: 20px 20px;
    position: relative;
    margin-bottom: 10px;
    z-index: 1;
    min-height: 100px;
    border-radius: 30px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 20%;
}
.user-card::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    z-index: -1;
}
.user-card__username {
    font-weight: bold;
    font-size: calc(1vw + 0.3em);
    text-shadow: 0px 0px 3px #fff;
}
.user-card__commenter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    text-shadow: 0px 0px 4px #fff;
    margin-top: auto;
}
.user-card__commenter__pre-text {
    font-size: calc(1vw + 0.1em);
    text-transform: uppercase;
}

.comment-box {
    flex: 1;
	position: relative;
	background: #171719;
    border: solid var(--pink) 1px;
    border-radius: 30px;
    padding: 15px 10px;
    margin-left: 38px;
    display: flex;
    width: 100%;
}

.comment-box::before {
    content: "";
	position: absolute;
	left: -25px;
	top: 60%;
	width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid var(--pink);
    border-top: 13px solid transparent;
    border-bottom: 13px solid var(--pink);
}

.comment-box::after {
	content: "";
	position: absolute;
	left: -23px;
    top: calc(60% + 1px);
	width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid #171719;
    border-top: 12px solid transparent;
    border-bottom: 12px solid #171719;
}

.comment-box__pre-text {
    font-size: 65.3px;
    font-style: italic;
    color: var(--pink);
    line-height: 0.8em;
    margin-right: 10px;
}



</style>

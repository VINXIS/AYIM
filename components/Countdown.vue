<template>
  <div class="countdownstyle">
    <div class="daysleft">1</div>
    <div class="daysleft">2</div>
  </div>
</template>

<style>
.countdownstyle {
	display: flex;
	justify-content: flex-end;
	text-align: center;
}

.daysleft {
	position: relative;
	color: #2a2a2a;
	background-color: white;
	font-weight: bold;
	font-size: 2.5em;
	margin: 0 0.23vw;
	line-height: 1em;
	letter-spacing: 0.15em;
	text-indent: 0.15em;
	text-align: center;
	border-radius: 0.75vw;
}

.daysleft::before {
	content: '';
	border-bottom: 0.1em solid #2a2a2a;
    width: 100%;
    position: absolute;
    right: 0;
    top: 50%;
}
</style>
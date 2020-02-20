import { discordGuild } from '../../CorsaceServer/discord';
import { Config } from '../../config';

const config = new Config();

export async function isMcaStaff(ctx, next): Promise<any> {
    if (!ctx.state.user.discord.accessToken) {
        return ctx.body = { 
            error: 'User is not logged in via discord!',
        };
    }
    
    const member = await discordGuild.fetchMember(ctx.state.user.discord.userID);

    if (member.roles.has(config.discord.roles.mca.staff)) {
        return await next();
    }
    
    return ctx.body = { 
        error: 'User is not a staff member!',
    };
}

export async function isHeadStaff(ctx, next): Promise<any> {
    const member = await discordGuild.fetchMember(ctx.state.user.discord.userID);

    if (member.roles.has(config.discord.roles.corsace.corsace) || member.roles.has(config.discord.roles.corsace.headStaff)) {
        return await next();
    }

    return ctx.body = { 
        error: 'User is not a head staff member!',
    };
}

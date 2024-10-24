const {
    ApplicationCommandOptionType,
    PermissionFlagsBits, ChannelType,
} = require('discord.js');
const { isVoiceChannel } = require('../../modules/voice-channels/isVoiceChannel')
module.exports = {

    name: 'loop',
    description: 'Repeats songs',
    options: [
        {
            name: 'mode',
            description: 'Repeat mode: 0 (Off), 1 (Song), 2 (Queue)',
            required: false,
            type: ApplicationCommandOptionType.Number
        },
    ],
    devOnly: true,

    callback: async (client, interaction) => {

        

        const num = interaction.options.get("mode").value;


        try {

            if (!isVoiceChannel(interaction)) return; 
            const voiceChannel= interaction.member.voice.channel;

            const queue = client.distube.getQueue(voiceChannel);

            if (!queue) {
                await interaction.followUp({
                    content: `There's no queue`,
                    ephemeral: true
                });
                return;
            }

            if (queue.playing) {
                mode = queue.setRepeatMode(num || 0);
                mode = mode ? (mode === 2 ? "queue" : "song") : "Off";
                await interaction.followUp({
                    content: `Repeating ${mode}`,
                    ephemeral: true,
                });
            } else {
              await  interaction.editReply("Nothing is getting played");
            }


        } catch (err) {

            console.log(err)
            await interaction.followUp({
                content: `Someone tell Mac, there's a problem with my system.`,
                ephemeral: true,
            });

        }
    },
};



export const Sfx = 
{
    "ding": { url:'../../../../../resources/audio/sfx/ding.wav', volum: 1 },
};

export const PlaySfx = (url, vol, on_end) =>
{
    const audio = new Audio(url);
    audio.volume = vol;
    audio.addEventListener("ended", on_end);
    audio.play();
}
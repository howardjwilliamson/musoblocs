const path_local = './../../../../../';
const path_ghpages = './../../../../../musoblocs/';
const path = path_ghpages;

export const Sfx = 
{
    "ding": { url: path + 'assets/audio/sfx/ding.wav', volum: 1 },
};

export const PlaySfx = (url, vol, on_end) =>
{
    const audio = new Audio(url);
    audio.volume = vol;
    audio.addEventListener("ended", on_end);
    audio.play();
}
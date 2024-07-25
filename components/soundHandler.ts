import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default async function playSwitchSound() {

    const [bgm, setBgm] = useState(null);
    try {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/click.wav'),
            { shouldPlay: true, isLooping: true }
        );
        setBgm(sound);

        await sound.playAsync();
    } catch (e) {
        
    }

    // you can use this for mobile apps, doesn't work on browser
    // useEffect(() => {
    //     playSound();
    // }, []);

    useEffect(() => {
        return bgm
            ? () => {
                bgm.unloadAsync();
            }
            : undefined;
    }, [bgm]);

}
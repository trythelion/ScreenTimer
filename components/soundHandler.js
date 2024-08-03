import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export default async function buildSoundObject() {

    console.log("Attempting to play click sound");
    try {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/click.mp3'));
        return sound;
    } catch (e) {
        console.error(e);
    }

    
}
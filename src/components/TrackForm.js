import React, { useContext}from 'react';
import {Input,Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state : {name, recording, locations},
        startRecording,stopRecording,changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <>
        <Spacer>
            <Input placeholder="Enter Name" value={name} onChangeText={changeName} />
        </Spacer>
        {recording ? <Button title="Stop Recording" onPress={stopRecording} /> : <Button title="Start Recording" onPress={startRecording} /> }
        {
            !recording && locations.length ? (
                <Button title="Save Recording" onPress={saveTrack} />
            ): null
        }
        </>
    );
};
 
export default TrackForm;
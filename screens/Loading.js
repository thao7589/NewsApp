import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Block, Text } from '../components';

function Loading() {
    return (
        <Block block center middle>
            <ActivityIndicator size='large' />
        </Block>
    )
}

export default Loading;
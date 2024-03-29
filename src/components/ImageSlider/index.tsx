import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface Props {
    imageUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function  ImageSlide({ imageUrl} : Props){
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) =>{
        const index = info.viewableItems[0].index!;
        setImageIndex(index);
    });

    return(
        <Container>
            <ImageIndexes>
                {   imageUrl.map((item, index) => (
                        <ImageIndex 
                            key={index}
                            active={index === imageIndex} 
                        />
                    ))
                }
            </ImageIndexes>

            <FlatList 
                data={imageUrl}
                keyExtractor={key => key}
                renderItem={({ item }) =>(
                    <CarImageWrapper>
                        <CarImage 
                            source={{ uri: item }} 
                            resizeMode="contain"
                        />
                    </CarImageWrapper> 
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChanged.current}
            />
        </Container>
    );
}
import { useState } from 'react'
import { animated, useTransition } from 'react-spring'

import * as S from './styles'

import foto1 from 'assets/foto1.jpg'
import foto2 from 'assets/foto2.jpg'
import foto3 from 'assets/foto3.jpg'

type ImagesProps = {
  description: string
  file: string
}[]

export const Carousel = (): React.ReactElement => {
  const [activeImage, setActiveImage] = useState(0)

  const images: ImagesProps = [
    {
      description: 'foto 1',
      file: foto1
    },
    {
      description: 'foto 2',
      file: foto2
    },
    {
      description: 'foto 3',
      file: foto3
    }
  ]

  const imageTransition = useTransition(activeImage, {
    from: { x: 500 },
    enter: { x: 0 },
    leave: { x: -500 },
    reverse: !!activeImage
  })

  return (
    <S.Wrapper>
      <div className="w__image-container">
        {images.map((image) =>
          imageTransition(
            (style, item) =>
              item && (
                <animated.img
                  style={style}
                  src={image.file}
                  alt={image.description}
                />
              )
          )
        )}
        {/* <img src={images[activeImage].file} className="wic__image" /> */}
      </div>
      <div className="w__dots-container">
        {images.map((item, index) => (
          <button key={item.description} onClick={() => setActiveImage(index)}>
            {item.description}
          </button>
        ))}
      </div>
    </S.Wrapper>
  )
}

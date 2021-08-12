import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Container } from './styles'

const Loader = () => {
    return (
        <Container>
            <SkeletonTheme color="#e4d4d4" highlightColor="#e0c6c6">
                <Skeleton circle={true} width={50} height={50} />
                <Skeleton count={4} height={40} />
            </SkeletonTheme>
        </Container>
    )
}

export default Loader
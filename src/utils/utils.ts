export const getGenerationRange = (generation: number): [number, number] => {
    switch(generation) {
        case 1: {
            return [0, 151];
            break;
        }
        case 2: {
            return [151, 100];
            break;
        }
        case 3: {
            return [251, 135];
            break;
        }
        case 4: {
            return [386, 107];
            break;
        }
        case 5: {
            return [493, 156];
            break;
        }
        case 6: {
            return [649, 72];
            break;
        }
        case 7: {
            return [721, 88];
            break;
        }
        case 8: {
            return [809, 96];
            break;
        }
        case 9: {
            return [905, 105];
            break;
        }
        default: {
            return [0, 151];
            break;
        }
    }
}
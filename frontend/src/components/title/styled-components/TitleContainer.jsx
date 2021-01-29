import styled from 'styled-components';
import Flex from '../../styled-components/Flex';

export default styled(Flex)`
    grid-row: 1 / 2;

    @media (max-width: 743px) {
        margin-bottom: 10px;
    }
`;

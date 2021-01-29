import styled from 'styled-components';

export default styled.div`
    width: 100%;
    max-width: 1128px;

    @media (max-width: 743px) {
        &:after {
            height: 1px;
            display: block;
            width: 100%;
            background: rgb(221, 221, 221);
            content: '';
        }
    }
`;

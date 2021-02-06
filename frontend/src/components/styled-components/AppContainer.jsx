import styled from 'styled-components';

export default styled.section`
    overflow-y: ${(props) =>
        (props.showModal || props.showShareModal) && 'hidden'};
`;

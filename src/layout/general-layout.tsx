import styled from 'styled-components';
import NavigationBar from '../components/navigation-bar';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChildrenWrapper = styled.div`
  flex: 1;
`

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <NavigationBar />
    </Wrapper>
  );
}

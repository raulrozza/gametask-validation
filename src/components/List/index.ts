import styled, {
    DefaultTheme,
    StyledComponent,
    StyledComponentBase,
} from 'styled-components';

interface IList extends StyledComponentBase<'ul', DefaultTheme> {
    Item: StyledComponent<'li', DefaultTheme>;
}

const List: IList = styled.ul`` as any;
List.Item = styled.li`
    text-align: left;
    list-style: none;
    margin: ${({ theme }) => theme.layout.spacing(2, 0)};

    &::before {
        content: '–';
        color: ${({ theme }) => theme.palette.secondary.main};
        margin-right: ${({ theme }) => theme.layout.spacing(1)};
    }

    &:not(:last-child)::after {
        content: ';';
    }

    &:last-child::after {
        content: '.';
    }
`;

export default List;

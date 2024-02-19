import styled from "styled-components";

export const BlogContainer = styled.div`
    width: 100%;
    padding: 120px 30px;
    display: flex;
    justify-content: center;
`

export const BlogWrap = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    gap: 80px;

    @media (max-width: 500px)
    {
        gap: 50px;
    }
`
export const BlogCard = styled.div`
    background-color: white;
    width: 100%;
    max-width: 380px;
    min-height: 350px;
    box-shadow: 0 20px 20px 0 rgba(0,0,0,.1);
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const BlogDateContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const BlogDateWrap = styled.div`
    border: 1px solid black;
    border-radius: 40px;
    padding: 9px;
    font-weight: 600;
`

export const BlogTitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const BlogTitle = styled.h2`
    font-size: 22px;
`

export const BlogDesc = styled.p`
    color: grey;
`

export const BlogBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const BlogBtn = styled.div`
    background-color: #FF0336;
    padding: 15px;
    color: white;
    font-weight: 600;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
`
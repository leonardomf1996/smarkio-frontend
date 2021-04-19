import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   width: 50%;
   padding: 30px;
`;

export const Comments = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   width: 50%;
   margin-top: 20px;
`;

export const Label = styled.label`
   font-weight: bold;
   font-size: 20px;
`;

export const TextArea = styled.textarea`
   width: 80%;
   height: 200px;   
   border-radius: 20px;
   padding: 10px;
`;

export const Button = styled.button`
   width: 80%;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   border-radius: 20px;
   font-weight: bold;
`;

export const Ul = styled.ul`
   width: 80%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
`;

export const Li = styled.li`
   list-style: none;
   display: flex;
   flex-direction: row;
   width: 80%;
   align-items: center;
   justify-content: space-between;

   margin-bottom: 20px;
`;
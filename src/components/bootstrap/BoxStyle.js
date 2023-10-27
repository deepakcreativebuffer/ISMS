import { Box, styled } from "@mui/material";

export const BoxWrappper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 30px;
  width: 20vw;
  border-radius: 10px;

  .input_section{
    .MuiFormLabel-root{
      text-align: left;
    }
    .MuiInputBase-input{
      border: #f20 solid thin;
      margin-top: 5px;
      font-size: 14px;
      border-radius: 5px;
      padding: 8px 10px;
    }
    .MuiInputBase-root{
      &::before{
        border:none;
        display:none;
      }
      &::after{
        border:none;
        display:none;
      }
    }
  }
  .cursor-pointer{
    color:#F97830;
  }
  .btn{
    .MuiButtonBase-root{
      background-color: #F97830;
      width: 100%;
      color: #FFFFFF;
    }
  }
`;

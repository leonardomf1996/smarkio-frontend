import { useState, useEffect } from 'react';

import GlobalStyles from './styles/global';
import { Container, Form, Comments, Label, TextArea, Button, Ul, Li } from './styles/styles';

import api from './services/api';

function App() {

  // Cadastro
  const initialFields = {
    text: ''
  };
  const [values, setValues] = useState(initialFields);

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (values.text === '') {
      return;
    }

    const json = {
      text: values.text
    };

    const response = api.post('comments', json);
    setValues(initialFields);
  }

  // Listagem
  const [comments, setComments] = useState(null);

  useEffect(() => {
    api.get('comments').then(response => {
      if (response.data != null) {
        setComments(response.data);
      } else {
        setComments({});
      }
    });
    console.log(comments);
  }, [comments]);

  return (
    <Container>

      <Form onSubmit={handleFormSubmit}>
        <Label>Comentário</Label>
        <TextArea
          name='text'
          value={values.text}
          onChange={handleInputChange}>
        </TextArea>
        <Button>Cadastrar</Button>
      </Form>

      <Comments>
        <Label>Comentários</Label>
        <Ul>

          {comments && Object.keys(comments).map(id =>
            <>
              <Li key={id}>{comments[id].text}
                <button>Ouvir</button>
              </Li>
            </>
          )}

        </Ul>
      </Comments>

      <GlobalStyles />
    </Container>
  );
}

export default App;
import { turmas } from '@/app/utils/turmas';
import { Box, List } from '@mui/material';
import React from 'react';
import Turma from './Turma';
import { doesProfessorTeachHere } from '@/app/utils/doesProfessorTeachHere';

type Props = {
  professor: { materias: string[]; nome: string; diretor: boolean };
};

const TurmasLista = ({ professor }: Props) => {
  return (
    <Box
      component='div'
      sx={{
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fff',
        margin: '0 auto',
      }}
    >
      <List component='nav' aria-label='Turmas'>
        {turmas.map((turmaObj, index) => {
          return (
            <Turma
              key={index}
              index={index}
              turmas={turmas}
              turmaObj={turmaObj}
              doesProfessorTeachHere={doesProfessorTeachHere(
                professor,
                turmaObj
              )}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default TurmasLista;

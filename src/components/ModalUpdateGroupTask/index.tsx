import React, { useState } from "react";
import {
  ModalBackground,
  ModalContent,
  ModalForm,
  ModalInput,
  CloseButton,
} from "../../pages/Tasks/style";

interface ModalUpdateGroupTaskProps {
  currentTitle: string;
  onUpdate: (newTitle: string) => void;
  onClose: () => void;
}

export const ModalUpdateGroupTask: React.FC<ModalUpdateGroupTaskProps> = ({
  currentTitle,
  onUpdate,
  onClose,
}) => {
  const [newTitle, setNewTitle] = useState(currentTitle);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(newTitle);
  };

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Atualizar Nome do Grupo</h2>
        <ModalForm onSubmit={handleSubmit}>
          <label htmlFor="groupTitle">Novo Título</label>
          <ModalInput
            id="groupTitle"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Novo nome do grupo"
          />
          <button type="submit">Atualizar</button>
        </ModalForm>
        <CloseButton onClick={onClose}>Cancelar</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

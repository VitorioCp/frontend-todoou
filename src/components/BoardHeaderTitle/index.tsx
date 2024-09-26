import { useState } from "react";
import { HeaderTitle } from "../../pages/Tasks/style";
import {
  ButtonModalTask,
  CloseButton,
  ContainerInput,
  FormItemTask,
  IconWrapper,
  InputModalTask,
  ItemTaskHeader,
  ModalContent,
  ModalOverlay,
} from "../BoardRenderGroup/style";
import { IoIosClose } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { api } from "../../services/api";

interface BoardHeaderTitleProps {
  value: string;
  id: number;
}

export const BoardHeaderTitle: React.FC<BoardHeaderTitleProps> = ({
  value,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupTitle, setGroupTitle] = useState(value); 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUpdateTitle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.put(`/grouptasks/${id}`, {
        groupTitle,
      });

      console.log("TaskGroup Atualizado com sucesso", response);

      setGroupTitle(groupTitle);  
    } catch (error) {
      console.error("Erro ao se conectar com o servidor", error);
    }

    closeModal();
  };

  return (
    <>
      <HeaderTitle onClick={openModal}>{groupTitle}</HeaderTitle>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ItemTaskHeader>
              <CloseButton onClick={closeModal}>
                <IoIosClose fontSize={45} />
              </CloseButton>
            </ItemTaskHeader>
            <FormItemTask onSubmit={handleUpdateTitle}>
              <ContainerInput>
                <IconWrapper>
                  <FaLayerGroup />
                </IconWrapper>
                <InputModalTask
                  id="groupTitle"
                  type="text"
                  value={groupTitle}
                  onChange={(e) => setGroupTitle(e.target.value)}
                  placeholder="Digite o nome do grupo"
                />
              </ContainerInput>
              <ButtonModalTask type="submit">Confirmar</ButtonModalTask>
            </FormItemTask>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

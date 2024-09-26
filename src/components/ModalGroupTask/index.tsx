import { useState } from "react";
import { ButtonFooter, CloseButton } from "../../pages/Tasks/style";
import { api } from "../../services/api";
import { FaLayerGroup, FaPlus } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContent,
  ItemTaskHeader,
  FormItemTask,
  InputModalTask,
  ButtonModalTask,
  IconWrapper,
  ContainerInput,
} from "../BoardRenderGroup/style";
import { IoIosClose } from "react-icons/io";

interface ModalGroupTaskProps {
  onGroupCreated: () => void;
}

export const ModalGroupTask: React.FC<ModalGroupTaskProps> = ({
  onGroupCreated,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupTitle, setGroupTitle] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateGroup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!groupTitle) {
      console.log("Preencha o campo");
      alert("Preencha o campo!");
    }
    try {
      await api.post("/grouptasks", {
        groupTitle,
      });

      onGroupCreated();

      console.log("Groupo Criado com sucesso");
    } catch (error) {
      console.error("Erro ao enviar os dados para o servidor", error);
    }
    setGroupTitle("");
    closeModal();
  };

  return (
    <>
      <ButtonFooter onClick={openModal}>
        <FaPlus fontSize={28} />
      </ButtonFooter>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ItemTaskHeader>
              <CloseButton onClick={closeModal}>
                <IoIosClose fontSize={45} />
              </CloseButton>
            </ItemTaskHeader>
            <FormItemTask onSubmit={handleCreateGroup}>
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

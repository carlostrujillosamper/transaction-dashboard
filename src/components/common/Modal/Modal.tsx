import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>{children}</ModalContent>
      </ChakraModal>
    </>
  );
}

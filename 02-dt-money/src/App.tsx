import { GlobalStyle } from "./styles/globals";
import { Header } from './components/Header/index';
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onModalOpen={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isModalOpen={isNewTransactionModalOpen} handleCloseModal={handleCloseNewTransactionModal}  />
    </> 
  );
}

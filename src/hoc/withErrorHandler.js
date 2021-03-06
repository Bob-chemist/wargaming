import React from "react";

import useHttpHelper from "../hook/httpErrorHandler";
import Modal from "../components/UI/Modal/Modal";

export const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpHelper(axios);

    return (
      <>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

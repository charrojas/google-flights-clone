import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaExclamationCircle, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const Alert = ({ type, message, onClose }) => {
  const getAlertStyles = () => {
    switch (type) {
      case 'error':
        return 'border-red-500 text-red-500 bg-red-100';
      case 'success':
        return 'border-green-500 text-green-500 bg-green-100';
      case 'info':
        return 'border-blue-500 text-blue-500 bg-blue-100';
      default:
        return 'border-gray-500 text-gray-500 bg-gray-100';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <FaExclamationCircle className="text-2xl mr-2" />;
      case 'success':
        return <FaCheckCircle className="text-2xl mr-2" />;
      case 'info':
        return <FaInfoCircle className="text-2xl mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 mb-4 border-l-4 rounded-md shadow-lg ${getAlertStyles()} w-96`}>
      <div className="flex items-center justify-between">
        {getIcon()}
        <p className="font-medium">{message}</p>
        <button onClick={onClose} className="ml-4 text-xl font-bold">
          <AiOutlineCloseCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Alert;

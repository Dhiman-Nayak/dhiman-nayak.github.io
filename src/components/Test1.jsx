import React, { useState } from 'react';
import { Send,   Mail, MessageSquare } from 'lucide-react';
import { FaChessKing,FaChessBishop,FaChessPawn } from "react-icons/fa";

const ChessContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    mood: null,
  });
  const [currentField, setCurrentField] = useState('name');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleMoodSelect = (mood) => {
    setFormState({
      ...formState,
      mood,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const moveToNextField = () => {
    const fields = ['name', 'email', 'message', 'mood'];
    const currentIndex = fields.indexOf(currentField);
    if (currentIndex < fields.length - 1) {
      setCurrentField(fields[currentIndex + 1]);
    }
  };

  const renderField = () => {
    switch (currentField) {
      case 'name':
        return (
          <div className="flex items-center space-x-4">
            <FaChessKing className="text-yellow-500 w-8 h-8 animate-pulse" />
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your Name (Chess Player)"
              className="flex-grow bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        );
      case 'email':
        return (
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-500 w-8 h-8" />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="flex-grow bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      case 'message':
        return (
          <div className="flex items-start space-x-4">
            <MessageSquare className="text-green-500 w-8 h-8" />
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="flex-grow bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            ></textarea>
          </div>
        );
      case 'mood':
        return (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg font-semibold text-gray-200">How are you feeling today?</p>
            <div className="flex space-x-8">
              <button
                type="button"
                onClick={() => handleMoodSelect('confident')}
                className="focus:outline-none transform hover:scale-110 transition-transform"
              >
                <FaChessKing
                  className={`w-12 h-12 ${
                    formState.mood === 'confident' ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                />
              </button>
              <button
                type="button"
                onClick={() => handleMoodSelect('neutral')}
                className="focus:outline-none transform hover:scale-110 transition-transform"
              >
                <FaChessPawn
                  className={`w-12 h-12 ${
                    formState.mood === 'neutral' ? 'text-orange-500' : 'text-gray-400'
                  }`}
                />
              </button>
              <button
                type="button"
                onClick={() => handleMoodSelect('thoughtful')}
                className="focus:outline-none transform hover:scale-110 transition-transform"
              >
                <FaChessBishop
                  className={`w-12 h-12 ${
                    formState.mood === 'thoughtful' ? 'text-blue-500' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-black text-white p-8 rounded-lg shadow-2xl">
        <Send className="w-16 h-16 mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
        <p className="text-xl">Thanks for reaching out. I'll get back to you soon!</p>
      </div>
    );
  }

  return (
    <div
      className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-md w-full mx-auto"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/chessboard-background.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-200 text-center">Let's Make a Move</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderField()}
        {currentField !== 'mood' ? (
          <button
            type="button"
            onClick={moveToNextField}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full py-2 px-4 hover:opacity-90 transition duration-300"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full py-2 px-4 hover:opacity-90 transition duration-300 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        )}
      </form>
    </div>
  );
};

export default ChessContactForm;

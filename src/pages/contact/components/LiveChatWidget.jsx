// import React, { useState, useEffect } from 'react';
// import Icon from '../../../components/AppIcon';
// import Button from '../../../components/ui/Button';

// const LiveChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isOnline, setIsOnline] = useState(true);
//   const [isTyping, setIsTyping] = useState(false);

//   const businessHours = {
//     start: 9,
//     end: 18,
//     days: [1, 2, 3, 4, 5] // Monday to Friday
//   };

//   useEffect(() => {
//     // Check if current time is within business hours
//     const now = new Date();
//     const currentHour = now?.getHours();
//     const currentDay = now?.getDay();
    
//     const isBusinessHours = businessHours?.days?.includes(currentDay) && 
//                            currentHour >= businessHours?.start && 
//                            currentHour < businessHours?.end;
    
//     setIsOnline(isBusinessHours);

//     // Initialize with welcome message
//     if (messages?.length === 0) {
//       const welcomeMessage = {
//         id: 1,
//         sender: 'support',
//         message: isBusinessHours 
//           ? `Hello! Welcome to DaRYTE Business Incubator. I'm here to help you with any questions about our services. How can I assist you today?`
//           : `Thank you for visiting DaRYTE Business Incubator! We're currently offline (Business hours: Mon-Fri 9 AM - 6 PM IST). Please leave a message and we'll get back to you within 24 hours.`,timestamp: new Date(),avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
//       };
//       setMessages([welcomeMessage]);
//     }
//   }, []);

//   const quickReplies = [
//     'Tell me about your services',
//     'I want to book a consultation',
//     'What are your pricing options?',
//     'How do I apply for the incubator program?',
//     'I need emergency legal consultation',
//     'Can I schedule a facility tour?'
//   ];

//   const handleSendMessage = () => {
//     if (!inputMessage?.trim()) return;

//     const userMessage = {
//       id: messages?.length + 1,
//       sender: 'user',
//       message: inputMessage,
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     // Simulate support response
//     setTimeout(() => {
//       const supportResponse = generateSupportResponse(inputMessage);
//       const supportMessage = {
//         id: messages?.length + 2,
//         sender: 'support',
//         message: supportResponse,
//         timestamp: new Date(),
//         avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
//       };
      
//       setMessages(prev => [...prev, supportMessage]);
//       setIsTyping(false);
//     }, 2000);
//   };

//   const generateSupportResponse = (userMessage) => {
//     const message = userMessage?.toLowerCase();
    
//     if (message?.includes('service') || message?.includes('what do you do')) {
//       return `We offer comprehensive business support including:\n• Business Incubator Programs\n• Legal & Compliance Services\n• Mentorship Programs\n• Government Sector Introduction\n• ReAttire Retirement Programs\n\nWould you like me to connect you with a specialist for detailed information?`;
//     }
    
//     if (message?.includes('consultation') || message?.includes('book') || message?.includes('appointment')) {
//       return `I'd be happy to help you book a consultation! We offer:\n• Quick Assessment (30 min) - Free\n• Comprehensive Review (90 min) - ₹5,000\n• Strategic Planning (Half Day) - ₹15,000\n\nShall I transfer you to our booking system or would you prefer to speak with a consultant directly?`;
//     }
    
//     if (message?.includes('price') || message?.includes('cost') || message?.includes('fee')) {
//       return `Our pricing is transparent and value-driven:\n• Initial consultation: Free\n• Comprehensive services: Starting from ₹5,000\n• Custom packages available based on your needs\n\nWould you like to schedule a free consultation to discuss pricing for your specific requirements?`;
//     }
    
//     if (message?.includes('apply') || message?.includes('incubator') || message?.includes('program')) {
//       return `Great! Our incubator application process is simple:\n1. Free initial consultation\n2. Application form submission\n3. Document review\n4. Expert panel interview\n5. Program matching\n\nWould you like to start with a free consultation call?`;
//     }
    
//     if (message?.includes('emergency') || message?.includes('urgent') || message?.includes('legal')) {
//       return `For emergency legal consultations, please call our hotline immediately at +91 98765 43211. Our legal experts are available for urgent compliance issues and regulatory challenges.\n\nAlternatively, I can escalate your case to our legal team right now. What's the nature of your legal concern?`;
//     }
    
//     if (message?.includes('tour') || message?.includes('visit') || message?.includes('office')) {
//       return `We'd love to show you our 6000 sq ft facility! We offer:\n• Virtual tours (available anytime)\n• In-person facility tours (by appointment)\n• Meeting room bookings for consultations\n\nOur office is located in Gurugram, Haryana 122016. Would you prefer a virtual tour or would you like to schedule an in-person visit?`;
//     }
    
//     return `Thank you for your message! I understand you're interested in learning more about DaRYTE Business Incubator. Let me connect you with one of our specialists who can provide detailed information tailored to your needs.\n\nIn the meantime, you can:\n• Call us at +91 98765 43210\n• Email us at hello@daryte.com\n• Book a free consultation\n\nHow would you prefer to proceed?`;
//   };

//   const handleQuickReply = (reply) => {
//     setInputMessage(reply);
//   };

//   if (!isOpen) {
//     return (
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-brand-lg flex items-center justify-center transition-brand animate-pulse"
//         >
//           <Icon name="MessageCircle" size={24} />
//         </button>
//         {/* Online indicator */}
//         {isOnline && (
//           <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white flex items-center justify-center">
//             <div className="w-2 h-2 bg-white rounded-full"></div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
//       <div className="bg-card rounded-2xl shadow-brand-lg border border-border overflow-hidden">
//         {/* Header */}
//         <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                 <Icon name="Headphones" size={20} />
//               </div>
//               {isOnline && (
//                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-primary"></div>
//               )}
//             </div>
//             <div>
//               <h3 className="font-semibold">DaRYTE Support</h3>
//               <p className="text-xs text-primary-foreground/80">
//                 {isOnline ? 'Online now' : 'Offline - We\'ll respond soon'}
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-primary-foreground/80 hover:text-primary-foreground transition-brand"
//           >
//             <Icon name="X" size={20} />
//           </button>
//         </div>

//         {/* Messages */}
//         <div className="h-80 overflow-y-auto p-4 space-y-4 bg-surface/30">
//           {messages?.map((message) => (
//             <div
//               key={message?.id}
//               className={`flex ${message?.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div className={`flex items-end space-x-2 max-w-[80%] ${message?.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
//                 {message?.sender === 'support' && (
//                   <img
//                     src={message?.avatar}
//                     alt="Support"
//                     className="w-8 h-8 rounded-full flex-shrink-0"
//                     loading="lazy"
//                     decoding="async"
//                   />
//                 )}
//                 <div
//                   className={`px-4 py-2 rounded-2xl ${
//                     message?.sender === 'user' ?'bg-primary text-primary-foreground' :'bg-card text-foreground border border-border'
//                   }`}
//                 >
//                   <p className="text-sm whitespace-pre-line">{message?.message}</p>
//                   <p className={`text-xs mt-1 ${
//                     message?.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
//                   }`}>
//                     {message?.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
          
//           {isTyping && (
//             <div className="flex justify-start">
//               <div className="flex items-end space-x-2">
//                 <img
//                   src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
//                   alt="Support"
//                   className="w-8 h-8 rounded-full"
//                   loading="lazy"
//                   decoding="async"
//                 />
//                 <div className="bg-card border border-border px-4 py-2 rounded-2xl">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                     <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Quick Replies */}
//         {messages?.length <= 1 && (
//           <div className="p-4 border-t border-border bg-surface/50">
//             <p className="text-xs text-muted-foreground mb-3">Quick questions:</p>
//             <div className="flex flex-wrap gap-2">
//               {quickReplies?.slice(0, 3)?.map((reply, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleQuickReply(reply)}
//                   className="text-xs px-3 py-1 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-brand"
//                 >
//                   {reply}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Input */}
//         <div className="p-4 border-t border-border bg-card">
//           <div className="flex space-x-2">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e?.target?.value)}
//               onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
//               placeholder={isOnline ? "Type your message..." : "Leave a message..."}
//               className="flex-1 px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
//             />
//             <Button
//               onClick={handleSendMessage}
//               variant="default"
//               size="sm"
//               iconName="Send"
//               className="bg-primary hover:bg-primary/90 text-primary-foreground px-3"
//               disabled={!inputMessage?.trim()}
//             />
//           </div>
//           <p className="text-xs text-muted-foreground mt-2 text-center">
//             {isOnline ? 'We typically reply instantly' : 'We\'ll respond within 24 hours'}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveChatWidget;


import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOnline, setIsOnline] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const businessHours = {
    start: 9,
    end: 18,
    days: [1, 2, 3, 4, 5]
  };

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();
    const isBusinessHours = businessHours.days.includes(currentDay) && currentHour >= businessHours.start && currentHour < businessHours.end;
    setIsOnline(isBusinessHours);

    if (messages.length === 0) {
      const welcomeMessage = {
        id: 1,
        sender: 'support',
        message: isBusinessHours
          ? `Hello! Welcome to Fstone Technologies. I'm here to help you with any questions about our workforce, staffing, and consulting services. How can I assist you today?`
          : `Thank you for visiting Fstone Technologies! We're currently offline (Business hours: Mon-Fri 9 AM - 6 PM IST). Please leave a message and we'll get back to you within 24 hours.`,
        timestamp: new Date(),
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  const quickReplies = [
    'Tell me about your services',
    'I want to book a consultation',
    'What are your pricing options?',
    'How does your staffing process work?',
    'Do you support enterprise hiring?',
    'Can I schedule a meeting?'
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const supportResponse = generateSupportResponse(inputMessage);
      const supportMessage = {
        id: messages.length + 2,
        sender: 'support',
        message: supportResponse,
        timestamp: new Date(),
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      };
      setMessages(prev => [...prev, supportMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const generateSupportResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('service') || message.includes('what do you do')) {
      return `We offer enterprise workforce and delivery services including:\n• Talent Advisory Services\n• Staffing & Recruiting\n• Managed Delivery Services\n• Executive Search\n• Workforce Management\n\nWould you like me to connect you with a specialist for more details?`;
    }

    if (message.includes('consultation') || message.includes('book') || message.includes('appointment')) {
      return `I'd be happy to help you schedule a consultation! We offer:\n• Quick Workforce Assessment (30 min) - Free\n• Comprehensive Workforce Review (90 min) - ₹5,000\n• Strategic Workforce Planning (Half Day) - ₹15,000\n\nWould you like me to help you book a session?`;
    }

    if (message.includes('price') || message.includes('cost') || message.includes('fee')) {
      return `Our pricing is flexible and transparent:\n• Initial consultation: Free\n• Service engagements start from ₹5,000\n• Custom enterprise packages available\n\nWould you like to discuss a package suited to your needs?`;
    }

    if (message.includes('process') || message.includes('staffing') || message.includes('hiring')) {
      return `Our staffing process includes:\n1. Requirement understanding\n2. Talent sourcing and screening\n3. Client interviews\n4. Onboarding and delivery support\n\nWould you like to start with a requirement discussion?`;
    }

    if (message.includes('enterprise') || message.includes('large') || message.includes('corporate')) {
      return `Yes, we specialise in enterprise and large-scale workforce programs including RPO, MSP, and managed delivery models.\n\nWould you like to speak with our enterprise solutions team?`;
    }

    if (message.includes('meeting') || message.includes('schedule')) {
      return `Sure — we can schedule a call or meeting at your convenience.\n\nPlease share your preferred date, time, and topic so I can arrange it for you.`;
    }

    return `Thank you for reaching out to Fstone Technologies! A member of our team will be happy to assist you further.\n\nYou can also:\n• Call us at +91 98765 43210\n• Email us at contact@fstonetech.com\n• Request a consultation\n\nHow would you like to proceed?`;
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-brand-lg flex items-center justify-center transition-brand animate-pulse">
          <Icon name="MessageCircle" size={24} />
        </button>
        {isOnline && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <div className="bg-card rounded-2xl shadow-brand-lg border border-border overflow-hidden">
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Headphones" size={20} />
              </div>
              {isOnline && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-primary"></div>}
            </div>
            <div>
              <h3 className="font-semibold">Fstone Support</h3>
              <p className="text-xs text-primary-foreground/80">{isOnline ? 'Online now' : 'Offline - We\'ll respond soon'}</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground transition-brand">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-surface/30">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-end space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {message.sender === 'support' && <img src={message.avatar} alt="Support" className="w-8 h-8 rounded-full" />}
                <div className={`px-4 py-2 rounded-2xl ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground border border-border'}`}>
                  <p className="text-sm whitespace-pre-line">{message.message}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-card border border-border px-4 py-2 rounded-2xl">Typing...</div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border bg-card">
          <div className="flex space-x-2">
            <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder={isOnline ? "Type your message..." : "Leave a message..."} className="flex-1 px-3 py-2 border border-border rounded-lg text-sm" />
            <Button onClick={handleSendMessage} variant="default" size="sm" iconName="Send" className="bg-primary hover:bg-primary/90 text-primary-foreground px-3" disabled={!inputMessage.trim()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatWidget;

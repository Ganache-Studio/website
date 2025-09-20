export const ContactList: React.FC = () => {
  const contacts = [
    { name: 'Ganache Studio', email: 'hello@ganache.studio' },
    { name: 'Benjamin Gilet', email: 'benjamin@ganache.studio' },
    { name: 'Gabriel Washer', email: 'gabriel@ganache.studio' },
  ];

  return (
    <>
      {contacts.map((contact, index) => (
        <div key={index}>
          <p className="font-bold">{contact.name}</p>
          <a href={`mailto:${contact.email}`} className="underline">
            {contact.email}
          </a>
        </div>
      ))}
    </>
  );
};

import React, { useEffect, useState, Fragment } from 'react';
import withLoader from './withLoader.js';
import ContactList from './ContactsList';
// import './ContactsApp.css';

// class LoaderDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: '',
//       searchResults: [],
//       contactList: [],
//     };
//     // this.handleUserInput = this.handleUserInput.bind(this);
//   }
//   // () => console.log(this.state),
//   handleUserInput = inputText => {
//     this.setState({
//       searchText: inputText,
//     });
//   };

//   componentWillMount() {
//     let init = {
//       method: 'GET',
//       headers: new Headers(),
//       mode: 'cors',
//       cache: 'default',
//     };

//     fetch('https://demo1443058.mockable.io/users/', init)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         this.setState(prevState => ({
//           contactList: [...data.contacts],
//         }));
//       });
//   }

//   render() {
//     return (
//       <div className="contactApp">
//         <ContactListWithLoadIndicator
//           contacts={this.state.contactList}
//         />
//       </div>
//     );
//   }
// }

const LoaderDemo = ({ url, ...props }) => {
  const [contacts, setList] = useState({
    contactList: [],
  });
  url = 'https://demo1443058.mockable.io/users/';
  useEffect(() => {
    const loadList = () => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setList({ contactList: [...data.contacts] });
        });
    };
    loadList();
  }, []);
  return (
    <div className="card-content">
      <ContactListWithLoadIndicator contacts={contacts.contactList}/>

      <div className="center">
              {contacts.contactList.map(contact => {
          return <div className="card">{contact.region}</div>;
        })}
      </div>
    </div>
  );
};

/* Static props can be passed down as function arguments */
const ContactListWithLoadIndicator = withLoader('contacts')(
  ContactList,
);

export default LoaderDemo;

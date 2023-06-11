// UserList.js

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://64855370a795d24810b6d86e.mockapi.io/Users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error obteniendo usuarios:', error);
    }
  };

  return (
    <View>
      <Text>Lista de Usuarios:</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default UserList;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Dimensions, SafeAreaView } from 'react-native';
import { useState } from 'react';




// Datos de ejemplo de productos
const products = [
  { id: '1', name: 'EJ1', price: 'Disponible', image: 'https://www.esneca.lat/wp-content/uploads/tipos-de-frutas-1.jpg' },
  { id: '2', name: 'EJ2', price: 'Disponible', image: 'https://www.esneca.lat/wp-content/uploads/tipos-de-frutas-1.jpg' },
  { id: '3', name: 'EJ3', price: 'Disponible', image: 'https://www.esneca.lat/wp-content/uploads/tipos-de-frutas-1.jpg' },
  { id: '4', name: 'EJ4', price: 'NO Disponible', image: 'https://www.esneca.lat/wp-content/uploads/tipos-de-frutas-1.jpg' },
];

//particion de la aplicacion para prueba de ventana


// fin del codigo de prueba
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [reputation, setReputation] = useState(4);  // Inicializar con una reputación de 4 estrellas

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //ejemplo

  //ejemplo

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderProduct = ({ item }) => (
    /*
    <View style={[styles.productCard, darkMode && styles.darkCard]}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={[styles.productName, darkMode && styles.darkText]}>{item.name}</Text>
      <Text style={[styles.productPrice, darkMode && styles.darkText]}>{item.price}</Text>
    </View>
    */
    <TouchableOpacity 
    style={[styles.productCard, darkMode && styles.darkCard]}
    onPress={() => alert(`Has seleccionado: ${item.name}`)} // Acción al presionar
  >
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <Text style={[styles.productName, darkMode && styles.darkText]}>{item.name}</Text>
    <Text style={[styles.productPrice, darkMode && styles.darkText]}>{item.price}</Text>
  </TouchableOpacity>
  
  );
  //ejemplo

  //ejemplo

  const renderStars = (reputation) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={[styles.star, i <= reputation ? styles.filledStar : styles.emptyStar]}>
          🌱
        </Text>
      );
    }
    return stars;
  };

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkContainer]}>
      {/* Barra de menú desplegable */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={[styles.navText, darkMode && styles.darkNavText]}>
            ☰ Menú
          </Text>
        </TouchableOpacity>
      </View>

      {/* Menú desplegable */}
      <Modal visible={menuVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={[styles.menu, darkMode && styles.darkMenu]}>
            <TouchableOpacity onPress={toggleDarkMode}>
              <Text style={[styles.menuItem, darkMode && styles.darkMenuItem]}>
                {darkMode ? 'Modo con privilegios' : 'Modo  Sin derechos'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.menuItem, darkMode && styles.darkMenuItem]}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.menuItem, darkMode && styles.darkMenuItem]}>Explorar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.menuItem, darkMode && styles.darkMenuItem]}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.menuItem, darkMode && styles.darkMenuItem]}>Mensajes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={[styles.menuItem, darkMode && styles.darkMenuItem]}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Sección de perfil */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://www.elimparcial.com/resizer/v2/2GVAZ7CRQJBFRJ7DHWENERGOW4.PNG?auth=7063740e46964db49fc6a0901a34ae8ec602536409bf266afef0c62bcc396686&smart=true&width=1200&height=1009&quality=70' }}
          style={styles.profileImage}
        />
        <Text style={[styles.name, darkMode && styles.darkText]}>Juan Pérez</Text>
        <Text style={[styles.bio, darkMode && styles.darkText]}>
          Maestro de las plantas 
          PLATINO V
        </Text>

        {/* Sistema de Reputación */}
        <View style={styles.reputationContainer}>
          <Text style={[styles.reputationText, darkMode && styles.darkText]}>
            Reputación:
          </Text>
          <View style={styles.starsContainer}>
            {renderStars(reputation)}
          </View>
        </View>
      </View>

      {/* Listado de productos */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      
      <StatusBar style={darkMode ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get('window');  // Dimensiones del dispositivo

// Estilos adaptados para iPhone 13 Pro Max (430x932 px)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,  // Margen superior para no interferir con el notch
    paddingBottom: 20, // Margen inferior para evitar la barra de tareas
    width: width, // Aseguramos que el ancho se ajuste al tamaño de la pantalla
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  navbar: {
    position: 'absolute',
    top: 40,  // Ajustado para que no se superponga con el notch
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  navText: {
    fontSize: 18,
    color: '#000',
    padding: 10,
  },
  darkNavText: {
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  menu: {
    backgroundColor: '#fff',
    width: width * 0.7,  // Ancho responsivo para el menú
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  darkMenu: {
    backgroundColor: '#333',
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#000',
  },
  darkMenuItem: {
    color: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: width * 0.25, // Ancho responsivo para la imagen del perfil
    height: width * 0.25, // Ajustar la altura a la misma proporción
    borderRadius: width * 0.125, // Hacerlo redondo
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  reputationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  reputationText: {
    fontSize: 16,
    marginRight: 10,
    color: '#888',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 20,
    marginRight: 5,
  },
  filledStar: {
    color: '#000000',
  },
  emptyStar: {
    color: '#000000',
  },
  productList: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 70,
  },
  productCard: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    width: width * 0.45,  // Ancho responsivo para las tarjetas de producto
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkCard: {
    backgroundColor: '#333',
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

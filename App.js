import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

export default function App() {
  const [name, setName] = useState("");
  const [isOk, setIsOK] = useState(false);
  const [count, setCount] = useState(80);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (count <= 0) {
      setIsOK(!isOk);
      setName("");
      setCount(80);
      setModalVisible(false);
    }
  }, [count]);

  const handleChange = (value) => {
    setName(value);
  };

  const handleSubmit = () => {
    if (name !== "") {
      setIsOK(true);
      toggleModal();
    }
  };

  const countPlus = () => {
    setCount(count + 1);
  };

  const countSustrac = () => {
    setCount(count - 1);
  };

  const countFivePlus = () => {
    setCount(count + 5);
  };

  const countFiveSustrac = () => {
    setCount(count - 5);
  };

  const data = [
    {
      names: ["diego", "lugo", "lu", "luguis"],
      description: "Jugador como nunca, perdedor como siempre.",
      image: "https://i.postimg.cc/G260PQpD/diego-modified.png",
    },
    {
      names: ["sebas", "gordo", "sebastian", "sebitas"],
      description: "Arepon como un putas.",
      image: "https://i.postimg.cc/W4rfLvpd/sebas-modified.png",
    },
    {
      names: ["juan", "juanito", "boso", "bosito", "juanjo"],
      description: "Simplemente una farandulita.",
      image: "https://i.postimg.cc/QdpsDGyB/juanjo.jpg",
    },
    {
      names: ["negro", "polo polo", "alejo", "alejandro"],
      description:
        "Enemigo #1 de la suerte del  gordo, llora en todos los juegos",
      image: "https://i.postimg.cc/XNRY68Yz/1200px-Miguel-Polo-Polo.jpg",
    },
    {
      names: ["pablo", "juan pablo"],
      description: "Gana menos de un salario mínimo (Según el).",
      image: "https://i.postimg.cc/Njpb3kHr/2181-1094629122131-904-n.jpg",
    },
  ];

  const getPlayerInfo = data.filter((player) =>
    player.names.includes(name.toLocaleLowerCase())
  );

  return (
    <>
      {!isOk && (
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "40%",
          }}
        >
          <Button title="Empezar" onPress={toggleModal} />

          <Modal isVisible={isModalVisible}>
            <View style={{ width: "100%", marginTop: "20%" }}>
              <Image
                source={require("./assets/HeroRealmsLogo-e1478268501548.png")}
                style={{
                  position: "absolute",
                  top: "-150%",
                  zIndex: 1,
                  margin: "-4%",
                }}
              />
              <TextInput
                onChangeText={handleChange}
                placeholder={"Ingresa tu nombre"}
                style={{
                  position: "relative",
                  backgroundColor: "#fff",
                  padding: 5,
                  borderWidth: 2,
                  margin: 5,
                  borderRadius: 15,
                  borderColor: "gray",
                  marginBottom: "10%",
                }}
              />
              <Button onPress={handleSubmit} title="Conectar" />
            </View>
          </Modal>
        </View>
      )}
      {isOk && (
        <>
          <Image
            source={require("./assets/10952834.jpg")}
            blurRadius={3}
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
          {getPlayerInfo?.map((player, index) => {
            return (
              <View key={index} style={styles.container}>
                <Image
                  source={{ uri: player.image }}
                  style={{
                    position: "absolute",
                    width: "60%",
                    height: "30%",
                    top: "23%",
                    left: "20%",
                    borderRadius: 160,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    width: "100%",
                    top: "49%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                      fontWeight: "600",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    {name.toLocaleUpperCase()}
                  </Text>
                </View>
                <View
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    width: "100%",
                    top: "50%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: "center",
                      color: "#000",
                      margin: "20%",
                      fontWeight: "600",
                      fontStyle: "italic",
                    }}
                  >
                    {player.description}
                  </Text>
                </View>
                <Image
                  style={styles.card}
                  source={require("./assets/card.png")}
                />
                <View style={styles.arrowsLeft}>
                  <TouchableOpacity onPress={countPlus}>
                    <Image
                      style={styles.arrowDown}
                      width={20}
                      height={20}
                      source={require("./assets/arrowUp.png")}
                    />
                  </TouchableOpacity>
                  <Text style={styles.numberByOne}>1</Text>
                  <TouchableOpacity onPress={countSustrac}>
                    <Image
                      style={styles.arrowDown}
                      width={20}
                      height={20}
                      source={require("./assets/arrowDown.png")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.arrowsRight}>
                  <TouchableOpacity onPress={countFivePlus}>
                    <Image
                      style={styles.arrowDown}
                      width={20}
                      height={20}
                      source={require("./assets/arrowUp.png")}
                    />
                  </TouchableOpacity>
                  <Text style={styles.numberByOne}>5</Text>
                  <TouchableOpacity onPress={countFiveSustrac}>
                    <Image
                      style={styles.arrowDown}
                      width={20}
                      height={20}
                      source={require("./assets/arrowDown.png")}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      width: "100%",
                      top: "49%",
                    }}
                  >
                    <Text
                      style={[
                        {
                          fontSize: 45,
                          textAlign: "center",
                          color: "#fff",
                        },
                        Platform.OS === "ios"
                          ? { left: "21%", bottom: "298%" }
                          : { left: "15%", bottom: "268%" },
                      ]}
                    >
                      {count}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "70%",
  },
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    margin: 0,
  },
  arrowsLeft: {
    position: "absolute",
    bottom: "0%",
    left: "10%",
  },

  arrowsRight: {
    position: "absolute",
    bottom: "0%",
    right: "10%",
  },

  numberByOne: {
    fontSize: 24,
    bottom: "43%",
    left: "43%",
    position: "absolute",
    color: "#fff",
    fontWeight: "600",
  },
});

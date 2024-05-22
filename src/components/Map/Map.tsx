import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function Map() {
  const mapRef = useRef();
  
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        zoomControlEnabled={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 27.180956,
          longitude: 31.183683,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 27.180956, longitude: 31.183683 }}
          title={"Assiut"}
          description={"This is Assiut, Egypt"}
        />
        <Marker
          coordinate={{ latitude: 27.184020, longitude: 31.192498 }}
          title={"Assiut University"}
          description={"This is Assiut University"}
        />
        <Marker
          coordinate={{ latitude: 27.273531, longitude: 31.151994 }}
          title={"Abnub"}
          description={"This is Abnub"}
        />
        {/* Add more markers here if needed */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

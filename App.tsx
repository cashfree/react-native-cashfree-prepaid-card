import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { CFCardFlow, CfResetPinFlow } from 'react-native-cashfree-prepaid-cards';

const HomeScreen = () => {
  const [resetPinOpen, setResetPinOpen] = useState(false);

  /**
   * This function is to capture card detail callback events
   * @param event 
   */
  const cardEvent = (event: any) => {
    console.log('CF Prepaid Card event', event);
  };

  /**
   * 
   * @param event This function is to capture reset pin callbacks events
   */
  const resetPinEvent = ( event : any) =>{
    console.log('CF Reset Pin event', event);
    switch (event) {
      case 'CF_RESET_PIN_SCREEN_DISMISS':
        setResetPinOpen(!resetPinOpen);
        break;
      default:
        break;
    }
  }

  /**
   * Get this token from App's backend.
   */
  const token =
    'eyJzZGtWZXJzaW9uIjoiMC4wLjEiLCJvcmdJZCI6IjIyMDMyODEzMTUyMTM1M0lEMU9JRDc0MDgyNTIiLCJwaG9uZSI6Ijk4NzA4OTY5NjYiLCJzZGtMb2dpblRva2VuIjoiQzkxQ0hhN1ZjWWZVRjEwWTFOeWFMYUk4dFNtenJqa3hPbjErMVd3eXNOd2hZaVR3PSIsInByb3ZpZGVyQ2FyZEhvbGRlcklkIjoiMjIxMTAzMDk0ODUyMjI5SUQxQ1VTVElENDYzMjMzNCIsInByZXBhaWRDYXJkcyI6W3sicHJvdmlkZXJDYXJkSWQiOiIyMjExMDMwOTQ4NTIyODNJRDFDQVJEODU0MDM1MiIsIm5hbWVPbkNhcmQiOiJ0ZXN0IiwibGFzdDRkaWdpdHMiOiI5MzE2In1dfQ==';
  
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <CFCardFlow
          environment="sanbox"
          templateId="default"
          token={token}
          onEvent={cardEvent}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => {
            setResetPinOpen(!resetPinOpen);
          }}
          title="Reset Pin Flow"
        />
        {resetPinOpen ? (
          <CfResetPinFlow
            resetPinContainerStyle={styles.pinContainerStyle}
            onEvent={resetPinEvent}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    marginHorizontal: 8, 
    marginVertical: 16 
  },
  cardContainer: {
    marginTop: 16,
    height: 300,
  },
  pinContainerStyle: {
    height: '50%',
    marginTop: 'auto',
  },
  buttonStyle: {
    marginTop: 8,
  },
});


export default HomeScreen;

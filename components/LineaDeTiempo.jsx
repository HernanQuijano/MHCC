import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

export function LineaDeTiempo(){
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };
  
    const renderTimelineItem = (date, index) => {
      const isActive = date === selectedDate;
  
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.timelineItem,
            isActive && styles.timelineItemActive
          ]}
          onPress={() => handleDateSelect(date)}
        >
          <Text style={styles.timelineItemText}>{date}</Text>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.timeline}
          showsHorizontalScrollIndicator={false}
        >
          {[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map(renderTimelineItem)}
        </ScrollView>
        {selectedDate && (
          <View style={styles.selectedDateContainer}>
            <Image
              source={require('../assets/IBM-1401.jpg')}
              style={styles.selectedDateImage}
            />
            <Text style={styles.selectedDateText}>
              Descripción de la fecha seleccionada: {selectedDate}
            </Text>
          </View>
        )}
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16
    },
    timeline: {
      flexDirection: 'row'
    },
    timelineItem: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 8
    },
    timelineItemActive: {
      backgroundColor: 'black',
    },
    timelineItemText: {
      color: 'black'
    },
    selectedDateContainer: {
      marginTop: 16,
      alignItems: 'center',
    },
    selectedDateImage: {
      width: 200,
      height: 200,
      marginBottom: 8
    },
    selectedDateText: {
      fontSize: 16,
      textAlign: 'center'
    }
  });
export default LineaDeTiempo;
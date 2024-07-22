import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileContext} from '../context/ProfileContext';
import round from 'lodash/round';

export default function ProfileScreen() {
  const {profileData, loading, error} = useContext(ProfileContext);

  const {name, image_url, followers_count, public_playlists} = profileData;

  const formatFollowers = count => {
    if (count >= 1000000) {
      return `${round(count / 1000000, 1)}M`;
    }
    if (count >= 1000) {
      return `${round(count / 1000, 1)}K`;
    }
  };

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView
        style={{marginTop: 50}}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={{padding: 12}}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/profile1.png')}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.profileName}>erendoksatli</Text>
              <Text style={styles.profileFollowers}>
                {formatFollowers(followers_count)} followers
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Your Playlists</Text>
        <View style={styles.playlistContainer}>
          {public_playlists.map(playlist => (
            <View
              key={playlist.uri}
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/100/300'}}
                style={styles.playListImage}
              />
              <View>
                <Text style={styles.playListName}>{playlist.name}</Text>
                <Text style={styles.playListFollowers}>
                  {formatFollowers(playlist.followers_count)} followers
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileFollowers: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 12,
  },
  playlistContainer: {
    padding: 15,
  },
  playListImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  playListName: {
    color: 'white',
  },
  playListFollowers: {
    color: 'white',
    marginTop: 7,
  },
});

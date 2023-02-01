import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SearchTMDB} from '../../Services/services';
import {MovieCard} from '../../components/MovieCard';
import Error from '../../components/Error';

const SearchScreen = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const onSubmit = query => {
    Promise.all([SearchTMDB(query, 'movie'), SearchTMDB(query, 'tv')])

      .then(([movie, tv]) => {
        const data = [...movie, ...tv];
        setSearchResults(data);
        onChangeText('');
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <View className="flex-1 mb-20">
      <View className="flex-row items-center">
        <View className="pt-6 flex-grow">
          <TextInput
            value={text}
            placeholder="Search here..."
            onChangeText={onChangeText}
            className="border border-slate-300 p-4 mx-3 rounded-full"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Image
              className="w-8 h-8 mt-5 mr-3"
              source={require('../../assets/images/searchIcon2.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-6">
        {/* Searched items results */}
        {searchResults && searchResults.length > 0 && (
          <FlatList
            numColumns={3}
            data={searchResults}
            renderItem={({item}) => (
              <View className="mb-3">
                <MovieCard navigation={navigation} item={item} />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        )}

        {/* When searched but no results */}
        {searchResults && searchResults.length == 0 && (
          <View>
            <Text>No results matching your criteria.</Text>
            <Text>Try different keywords.</Text>
          </View>
        )}

        {/* When nothing is searched */}
        {!searchResults && (
          <View className="justify-center ml-6">
            <Text className="text-slate-600">
              Type something to start searching
            </Text>
          </View>
        )}

        {/* Error */}
        {error && <Error />}
      </View>
    </View>
  );
};

export default SearchScreen;

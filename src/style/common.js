import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  full_screen: {
    width: '100%',
    height: '100%'
  },
  abs_top: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    width: '100%',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgb(239, 239, 244)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  small_size: {
    fontSize: 11
  },
  mg_top2: {
    marginTop: 2
  },
  mg_top20: {
    marginTop: 20
  },
  container: {
    height: '100%',
    marginTop: 50,
    backgroundColor: '#fff'
  }
})

export default common;

import { requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types'

var iface = {
    name: 'JustifiedText',
    propTypes: {
        text: PropTypes.string,
        color: PropTypes.string,
        fontSize: PropTypes.number,
        lineHeightMultiplicator: PropTypes.number,
        fontFamily: PropTypes.string,
        ...View.propTypes // include the default view properties
    },
};

module.exports = requireNativeComponent('JustifiedText', iface);

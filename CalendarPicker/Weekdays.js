import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import moment from 'moment';

export default function Weekdays(props) {
	const { styles, startFromMonday, weekdays, textStyle } = props;
	let wd = weekdays;
	if (!wd) {
		wd = startFromMonday ? Utils.WEEKDAYS_MON : Utils.WEEKDAYS; // English Week days Array
	}

	const today = moment();
	const dayLabel = today.format('ddd');
	let cus_wd = Utils.CUS_WEEKDAYS;

	return (
		<View style={styles.dayLabelsWrapper}>
			{cus_wd.map((day, key) => {
				return (
					<Text
						key={key}
						style={[styles.dayLabels, textStyle, dayLabel === day.key && styles.selectedDayCusLabel]}
					>
						{day.label}
					</Text>
				);
			})}
		</View>
	);
}

Weekdays.propTypes = {};

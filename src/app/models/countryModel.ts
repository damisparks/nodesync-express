import {model, Schema} from 'mongoose';
import {ICountry} from '@/interfaces/countryInterface';

const countrySchema = new Schema<ICountry>({
  name: {
    type: String,
    required: true,
  },
  common: {type: String, default: ''},
  independent: {type: Boolean, default: false},
  status: {type: String, default: ''},
  subregion: {type: String, default: ''},
  maps: {
    googleMaps: {type: String, default: ''},
    openStreetMaps: {type: String, default: ''},
  },
  area: {type: Number, default: 0},
  timezones: {type: [String], default: []},
  flags: {
    svg: {type: String, default: ''},
    png: {type: String, default: ''},
  },
  capitalInfo: {
    latlng: {type: [Number], default: []},
  },
  startOfWeek: {type: String, default: ''},
});

export const Country = model<ICountry>('Country', countrySchema, 'countries');

import moment from 'moment';

export const formatTitle = title => moment(title).format('ddd DD-MM-YYYY');

export const formatPreviewContent = content => content;
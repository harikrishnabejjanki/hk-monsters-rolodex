import React from 'react';
import { selectDirectorySection } from '../../redux/directory/directory-selector';
import MenuItem from '../menu-item/menu-item';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './directory.scss';


const Directory = ({ sections }) =>
    (
        <div className="directory-menu">

            {sections.map(
                ({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                )
            )}
        </div>
    );



const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);
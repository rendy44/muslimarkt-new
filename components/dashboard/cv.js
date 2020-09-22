import styles from './styles/cv.module.scss'
import {Button} from "../button";
import FormCV from "../forms/dashboard/cv";
import {Item, ItemWrapper} from "./list";
import PropTypes from 'prop-types'
import React from "react";
import CheckLineIcon from "remixicon-react/CheckLineIcon";

const CVFile = (props) => {
    return (
        <Item deleteEndpoint={'media'} slug={props.slug} title={props.title} linkAs={''} linkTo={props.url}
              isHideDelete={props.isActive} isStandOut={props.isActive} moreAction={() => {
        }} moreActionIcon={!props.isActive ? <CheckLineIcon size={16}/> : <></>} isWithMoreAction={!props.isActive}>
            <div className={styles.cv}>
                <div className={styles.inner}>
                    <p>Diunggah pada {props.uploadDate}</p>
                </div>
            </div>
        </Item>
    )
}
const CVAdd = (props) => {
    return (
        <ItemWrapper>
            <FormCV/>
        </ItemWrapper>
    )
}

CVFile.propTypes = {
    isActive: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uploadDate: PropTypes.string.isRequired
}

export {CVFile, CVAdd}
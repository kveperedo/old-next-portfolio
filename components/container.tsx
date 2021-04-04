import containerStyles from './container.module.css';

const Container: React.FC = ({ children }) => {
	return <div className={containerStyles.main}>{children}</div>;
};

export default Container;

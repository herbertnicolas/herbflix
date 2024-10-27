import React, { memo } from 'react';

// Material-UI
import { Skeleton } from '@mui/material';

export default memo(({ children, loading, ...rest }) => (
    loading ? (
        <Skeleton {...rest}>
            {children}
        </Skeleton>
    ) : children
));

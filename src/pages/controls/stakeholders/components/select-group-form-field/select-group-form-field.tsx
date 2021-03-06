import React from "react";
import { AxiosError } from "axios";
import { FieldHookConfig, useField } from "formik";

import { StakeholderGroup } from "api/models";

import { SelectGroup } from "../select-group";

export interface SelectMemberFormFieldProps {
  groups: StakeholderGroup[];
  isFetching: boolean;
  fetchError?: AxiosError;
}

export const SelectGroupFormField: React.FC<
  FieldHookConfig<StakeholderGroup[] | undefined> & SelectMemberFormFieldProps
> = ({ groups: stakeholders, isFetching, fetchError, ...props }) => {
  const [field, , helpers] = useField(props);

  const handleOnSelect = (value: StakeholderGroup[]) => {
    helpers.setValue(value);
  };

  const handleOnClear = () => {
    helpers.setValue(undefined);
  };

  return (
    <SelectGroup
      value={field.value}
      groups={stakeholders}
      isFetching={isFetching}
      fetchError={fetchError}
      onSelect={handleOnSelect}
      onClear={handleOnClear}
    />
  );
};

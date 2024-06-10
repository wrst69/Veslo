'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/shared/ui/select";

  export function NodeGroupSelect({
    nodeGroups,
    onSelect
  }: {
    nodeGroups,
    onSelect
  }) {

    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className="w-max">
                <SelectValue placeholder="Все" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Все</SelectItem>
                {nodeGroups.map(group => <SelectItem key={group.nodeGroup.id} value={group.nodeGroup.title}>{group.nodeGroup.title}</SelectItem>)}
            </SelectContent>
        </Select>
    )
  };
  